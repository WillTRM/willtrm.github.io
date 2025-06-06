function displayCoordinates()
{
    // for converting degrees to radians when defining sloeps
    const RADIAN_FACTOR = Math.PI / 180;

    const x1 = parseInt(document.getElementById("x1_input").value);
    const y1 = parseInt(document.getElementById("y1_input").value);
    const f1 = parseInt(document.getElementById("f1_input").value);
    const x2 = parseInt(document.getElementById("x2_input").value);
    const y2 = parseInt(document.getElementById("y2_input").value);
    const f2 = parseInt(document.getElementById("f2_input").value);

    // convert facing angle from Minecraft -180-180 range to standard 0-360 range
    const fixed_angle1 = (-f1 - 90) % 360;
    const fixed_angle2 = (-f2 - 90) % 360;
    
    const slope1 = Math.sin(fixed_angle1 * RADIAN_FACTOR) / Math.cos(fixed_angle1 * RADIAN_FACTOR);
    const slope2 = Math.sin(fixed_angle2 * RADIAN_FACTOR) / Math.cos(fixed_angle2 * RADIAN_FACTOR);

    // solve for the intersection of the two lines created
    const intersection_x = (-slope2*x2 + y2 + slope1*x1 - y1) / (slope1 - slope2);
    const intersection_y = slope1*intersection_x - slope1*x1 + y1;

    document.getElementById("x-coordinate").innerHTML = "X: " + Math.round(intersection_x);
    document.getElementById("y-coordinate").innerHTML = "Z: " + Math.round(intersection_y);
    // document.getElementById("left-pearl").src = "assets/eye_of_ender.png";
    // document.getElementById("right-pearl").src = "assets/eye_of_ender.png";
    console.log(intersection_x);
    console.log(intersection_y);
}