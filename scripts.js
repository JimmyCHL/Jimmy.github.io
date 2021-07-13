function myFun() {
    //toggle botton
    let trigger = false;
    let toggleButton = document.getElementById("toggle-button");
    toggleButton.onclick = () => {
        document.getElementById("navbar").classList.add("active");
        trigger = true;
    };

    //close navbar
    let close = document.getElementById("close-button");
    close.addEventListener("click", () => {
        if (trigger) {
            document.getElementById("navbar").classList.remove("active");
            trigger = false;
        }
    });
    let close2 = document.getElementById("navbar");
    close2.addEventListener("mouseleave", () => {
        if (trigger) {
            document.getElementById("navbar").classList.remove("active");
            trigger = false;
        }
    });


    // handlebar processing------------------------------------------------------------------------

    async function loadData() {
        let resp = await fetch("https://raw.githubusercontent.com/JimmyCHL/json-file/main/planet.json");
        let data = await resp.json();
        //console.log(data);

        // compile templates
        let handlebar1Template = Handlebars.compile(document.getElementById("handlebar-bar-first").innerHTML);
        let handlebar2Template = Handlebars.compile(document.getElementById("handlebar-bar-second").innerHTML);


        //look for which planet
        let planetName = document.querySelector("#outer-box").className;
        //console.log(planetName);


        //find that planet
        let planetFound = "";
        data.forEach((planet) => {
            if (planet.name === planetName) {
                planetFound = planet;
            }
        })

        //console.log(planetFound)

        //console.log(document.getElementsByClassName('planet-info')[0].innerHTML);

        // load planet-info data
        let planetInfo1 = document.getElementsByClassName('planet-info')[0];
        planetInfo1.innerHTML = handlebar1Template(planetFound);

        //console.log(document.getElementsByClassName('planet-info')[0].innerHTML);


        // load planet-status data
        let planetStatus = document.getElementsByClassName('planet-status')[0];
        planetStatus.innerHTML = handlebar2Template(planetFound);


        //console.log(document.querySelectorAll(".specific-intro h3")[0])



        /* ---------------code for button changing imgs and contents and sources-------------------------- */

        //overview-template
        handlebar1Template = Handlebars.compile(document.getElementById("handlebar-bar-first").innerHTML);
        //internal structure-template
        let handlebar3Template = Handlebars.compile(document.getElementById("handlebar-bar-third").innerHTML);
        // surface geology-template
        let handlebar4Template = Handlebars.compile(document.getElementById("handlebar-bar-fourth").innerHTML);



        // create selfRun function (because .innerHTML would destroy original listener)
        function selfRun() {
            // overview
            let overviewButton = document.querySelectorAll(".specific-intro h3")[0];
            overviewButton.addEventListener('click', () => {
                planetInfo1.innerHTML = handlebar1Template(planetFound);
                selfRun();
            });


            // internal structure
            let internalButton = document.querySelectorAll(".specific-intro h3")[1];
            internalButton.addEventListener('click', () => {
                planetInfo1.innerHTML = handlebar3Template(planetFound);
                selfRun();
            });


            // surface geology
            let surfaceButton = document.querySelectorAll(".specific-intro h3")[2];
            surfaceButton.addEventListener('click', () => {
                planetInfo1.innerHTML = handlebar4Template(planetFound);
                document.querySelector("#planet-img img").style = "position:relative; top:-47px;";
                selfRun()
            });
        }



        // overview
        let overviewButton = document.querySelectorAll(".specific-intro h3")[0];
        overviewButton.addEventListener('click', () => {
            planetInfo1.innerHTML = handlebar1Template(planetFound);
            selfRun();
        });


        // internal structure
        let internalButton = document.querySelectorAll(".specific-intro h3")[1];
        internalButton.addEventListener('click', () => {
            planetInfo1.innerHTML = handlebar3Template(planetFound);
            selfRun();
        });

        // surface geology
        let surfaceButton = document.querySelectorAll(".specific-intro h3")[2];
        surfaceButton.addEventListener('click', () => {
            planetInfo1.innerHTML = handlebar4Template(planetFound);
            document.querySelector("#planet-img img").style = "position:relative; top:-47px;";
            selfRun();
        });


    }

    loadData();

}


// var myRequest = new Request('./data.json');
// console.log(myRequest)
// async function hi() {
//     let resp = await fetch(myRequest);
//     let data = await resp.json();
//     console.log(data)
// }
// hi();