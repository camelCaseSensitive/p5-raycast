function raycast(d, pos, thresh){
    // ***************   Unprojection   ***************
    
    // Normalized screen space  (0 : 1)  Viewport Coordinates
    let normX = mouseX/width;
    let normY = mouseY/height;
    
    // NDC Space (-1 : 1)  Normalized Device Coordinates
    let ndcX = (mouseX - width/2) / width * 2;
    let ndcY = (mouseY - height/2) / height * 2;
    let ndcZ = 1.0;
    ndc = [ndcX, -ndcY, ndcZ, 1]  // NDC vector
    
    // Projection Matrix
    let p = _renderer.uPMatrix.mat4;
    let projectionMatrix = [
      [p[0], p[1], p[2], p[3]],
      [p[4], p[5], p[6], p[7]],
      [p[8], p[9], p[10], p[11]],
      [p[12], p[13], p[14], p[15]]
    ]
    
    // Eye/view/camera space vector
    let camV = math.multiply(ndc, math.inv(projectionMatrix));
    
    // Division factor for perspective compensation
    let w = camV[3];
    
    // Model View Matrix
    let m = _renderer.uMVMatrix.mat4;
    let modelViewMatrix = [
      [m[0], m[1], m[2], m[3]],
      [m[4], m[5], m[6], m[7]],
      [m[8], m[9], m[10], m[11]],
      [m[12], m[13], m[14], m[15]]
    ]
    
    // World space
    let world = math.multiply(camV, math.inv(modelViewMatrix));
    
    // World space (compensating for perspective)
    let world2 = [world[0]/w, world[1]/w, world[2]/w]
    // ***************************************************
    
    // Ray length - distance from camera to pickable object
    let dRay = d;
    
    // Position of the tip of the ray in world space
    let phi = atan2(world2[1] - cam.eyeY, dist(world2[0], world2[2], cam.eyeX, cam.eyeZ))
    let th = -atan2(world2[0] - cam.eyeX, world2[2] - cam.eyeZ) + PI/2
    let ray = [cam.eyeX + dRay * cos(phi) * cos(th), 
             cam.eyeY + dRay * sin(phi), 
             cam.eyeZ + dRay * cos(phi) * sin(th)]
    
    // Picking detection
    if(dist(ray[0], ray[1], ray[2], pos[0], pos[1], pos[2]) < thresh) {
      return true
    }
    return false;
  }
