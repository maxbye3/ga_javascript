    
window.onload = function() {
    // TURNED ALL BULLETPOINTS GREEN
    document.getElementById('helloWorldHeader').style.color = 'red';
    for(let i = 0; i < document.getElementsByTagName('li').length; i++){
      document.getElementsByTagName('li')[i].style.color = 'green';
    }

    // ADDING TEXT TO DOM
    const main_heading = document.createElement("h1");
    const heading_text = document.createTextNode("Hello dynamic world!");
    main_heading.appendChild(heading_text);
    document.body.appendChild(main_heading);

    document.getElementById("loadStatus").innerText = "loading...";
}
    



