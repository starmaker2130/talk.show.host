var Experience = {
    environment: [
        {
            name: "company-landing-page",
            id: function(){
                return "main-app-container";
            },
            type: "website",
            class: "environment-container",
            settings: "all",
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                return el;
            }
        }
    ],
    objectsubject: [
        {
            name: "home",
            type: "container",
            class: "page-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 0,
            children: [
                1,  // #application-title-container
                3,  // #go-to-next-one-button-container
                5,
            ],
            parent: [],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "talk",
            type: "button-container",
            class: "option-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            index: 1,
            content: function(){
                return "";
            },
            children: [
                //2
            ],
            parent: [
                0
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "talk",
            type: "container",
            class: "option-title-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            index: 2,
            content: function(){
                return "talk";
            },
            children: [
            ],
            parent: [
                1
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "show",
            type: "button-container",
            class: "option-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                let self = this;
                //console.log(pointer);
                return "";
            },
            index: 3,
            children: [
                //4
            ],
            parent: [
                0
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "show",
            type: "container",
            class: "option-title-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                return "show";
            },
            index: 4,
            children: [],
            parent: [
                3
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "host",
            type: "button-container",
            class: "option-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 5,
            children: [
                //6
            ],
            parent: [
                0
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "host",
            type: "button-container",
            class: "option-title-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(pointer){
                return "host";
            },
            index: 6,
            children: [],
            parent: [
                5
            ],
            element: function(pointer){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id(pointer));
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "talk",
            type: "container",
            class: "page-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 7,
            children: [
                8,  // #application-title-container
                10,  // #go-to-next-one-button-container
                11, // #go-to-next-one-indicator-container
                13,
                15,
            ],
            parent: [],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "talk",
            type: "container",
            class: "page-title-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 8,
            children: [
            ],
            parent: [
                7
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "talk",
            type: "container",
            class: "page-title-line-0-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "talk";
            },
            index: 9,
            children: [
            ],
            parent: [
                8
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "talk",
            type: "container",
            class: "page-title-line-1-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "about";
            },
            index: 10,
            children: [
            ],
            parent: [
                8
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "topic-sentence",
            type: "container",
            class: "container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 11,
            children: [
            ],
            parent: [
                7
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "topic-sentence",
            type: "container",
            class: "content-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "topic sentence or news item will display here";
            },
            index: 12,
            children: [
            ],
            parent: [
                11
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "timer-button-0",
            type: "container",
            class: "button-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 13,
            children: [
            ],
            parent: [
                7
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "timer-button-0",
            type: "container",
            class: "button-content-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "60";
            },
            index: 14,
            children: [
            ],
            parent: [
                13
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "talk",
            type: "container",
            class: "user-video-stream-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 15,
            children: [
            ],
            parent: [
                7
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "show",
            type: "container",
            class: "page-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 16,
            children: [
                17,
                19,
                21
            ],
            parent: [
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "show",
            type: "container",
            class: "page-title-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 17,
            children: [
                //18
            ],
            parent: [
                16
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "show",
            type: "container",
            class: "page-title-line-0-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "show";
            },
            index: 18,
            children: [
            ],
            parent: [
                17
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "timer-button-1",
            type: "container",
            class: "button-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 19,
            children: [
                //20
            ],
            parent: [
                16
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "timer-button-1",
            type: "container",
            class: "button-content-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "60";
            },
            index: 20,
            children: [
                //20
            ],
            parent: [
                19
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "show",
            type: "container",
            class: "user-video-stream-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 21,
            children: [
            ],
            parent: [
                16
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "host",
            type: "container",
            class: "page-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 22,
            children: [
                23,
                25,
                27,
                28,
                29,
                30,
                31
            ],
            parent: [
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "host",
            type: "container",
            class: "page-title-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 23,
            children: [
            ],
            parent: [
                22
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "host",
            type: "container",
            class: "page-title-line-0-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "host";
            },
            index: 24,
            children: [
            ],
            parent: [
                23
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "timer-button-2",
            type: "container",
            class: "button-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 25,
            children: [
            ],
            parent: [
                22
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "timer-button-2",
            type: "container",
            class: "button-content-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "60";
            },
            index: 26,
            children: [
            ],
            parent: [
                25
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "collection-item-0",
            type: "container",
            class: "item-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "0";
            },
            index: 27,
            children: [
            ],
            parent: [
                22
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "collection-item-1",
            type: "container",
            class: "item-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "1";
            },
            index: 28,
            children: [
            ],
            parent: [
                22
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "collection-item-2",
            type: "container",
            class: "item-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "2";
            },
            index: 29,
            children: [
            ],
            parent: [
                22
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "collection-item-3",
            type: "container",
            class: "item-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "3";
            },
            index: 30,
            children: [
            ],
            parent: [
                22
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
        {
            name: "collection-item-4",
            type: "container",
            class: "item-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "4";
            },
            index: 31,
            children: [
            ],
            parent: [
                22
            ],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
    ],
    subjectobject: [],
    effector: [
        {
            view: "flat",
            event: "click",
            fx: function(target){
                let val = target;
                
                console.log("------------------------------------");
                console.log(`${val}`);
                console.log("------------------------------------");
                switch(val){
                    case "go-to-next-one-indicator-container":
                        pp();
                        break;
                    case "go-to-previous-one-indicator-container":
                        pp();
                        break;
                    case "go-to-next-one-button-container":
                        pp();
                        break;
                    case "go-to-previous-one-button-container":
                        pp();
                        
                        break;
                    case "go-to-previous-zero-button-container":
                        qq();
                        break;
                    case "go-to-previous-zero-indicator-container":
                        qq();
                        break;
                    case "market-option-button-container":
                        rr();
                        break;
                    case "afs-view-site-button-container":
                        console.log("yououuoi");
                        window.open("http://annesfloweshop.com", "_blank");
                        break;
                    case "afs-venture-option-container":
                        if(appPreviewInFocus!=null){
                            let previousFocus = document.getElementById(appPreviewInFocus);
                            previousFocus.style.height = "33%";
                            previousFocus.style.lineHeight = "200px";
                            let prefix = appPreviewInFocus.substring(0, appPreviewInFocus.indexOf("-"));
                            document.getElementById(prefix+"-description-container").style.opacity = 0;
                            document.getElementById(prefix+"-view-site-button-container").style.opacity = 0;
                            
                            setTimeout(function(){
                                document.getElementById(prefix+"-description-container").style.display = "none";
                                document.getElementById(prefix+"-view-site-button-container").style.display = "none";
                            }, 500);
                            
                            document.getElementById(prefix+"-description-container").style.fontSize = "0px";
                            document.getElementById(prefix+"-view-site-button-container").style.fontSize = "0px";
                            
                            if(appPreviewInFocus=="afs-venture-option-container"){
                                window.open("http://annesflowershop.com", "_blank");
                            }
                        }
                        if(appPreviewInFocus!="afs-venture-option-container"){
                            document.getElementById("afs-venture-option-container").style.height = "50%";
                            document.getElementById("afs-venture-option-container").style.lineHeight = "50px";

                            document.getElementById("afs-description-container").style.display = "block";
                            document.getElementById("afs-description-container").style.opacity = 1.0;
                            document.getElementById("afs-view-site-button-container").style.display = "block";
                            document.getElementById("afs-view-site-button-container").style.opacity = 1.0;

                            document.getElementById("afs-description-container").style.fontSize = "40px";
                            document.getElementById("afs-view-site-button-container").style.fontSize = "40px";
                            setTimeout(function(){
                                appPreviewInFocus = "afs-venture-option-container";
                            }, 550);
                        }
                        else{
                            appPreviewInFocus = null;
                        }
                        break;
                    case "foodid-venture-option-container":
                        if(appPreviewInFocus!=null){
                            let previousFocus = document.getElementById(appPreviewInFocus);
                            previousFocus.style.height = "33%";
                            previousFocus.style.lineHeight = "200px";
                            let prefix = appPreviewInFocus.substring(0, appPreviewInFocus.indexOf("-"));
                            document.getElementById(prefix+"-description-container").style.opacity = 0;
                            document.getElementById(prefix+"-view-site-button-container").style.opacity = 0;
                            
                            setTimeout(function(){
                                document.getElementById(prefix+"-description-container").style.display = "none";
                                document.getElementById(prefix+"-view-site-button-container").style.display = "none";
                            }, 500);
                            
                            document.getElementById(prefix+"-description-container").style.fontSize = "0px";
                            document.getElementById(prefix+"-view-site-button-container").style.fontSize = "0px";
                        }
                        if(appPreviewInFocus!="foodid-venture-option-container"){
                            document.getElementById("foodid-venture-option-container").style.height = "50%";
                            document.getElementById("foodid-venture-option-container").style.lineHeight = "50px";

                            document.getElementById("foodid-description-container").style.display = "block";
                            document.getElementById("foodid-description-container").style.opacity = 1.0;
                            document.getElementById("foodid-view-site-button-container").style.display = "block";
                            document.getElementById("foodid-view-site-button-container").style.opacity = 1.0;

                            document.getElementById("foodid-description-container").style.fontSize = "20px";
                            document.getElementById("foodid-view-site-button-container").style.fontSize = "20px";
                            setTimeout(function(){
                                appPreviewInFocus = "foodid-venture-option-container";
                            }, 550);
                        }
                        else{
                            appPreviewInFocus = null;
                        }
                        break;
                    case "tsh-venture-option-container":
                        if(appPreviewInFocus!=null){
                            let previousFocus = document.getElementById(appPreviewInFocus);
                            previousFocus.style.height = "33%";
                            previousFocus.style.lineHeight = "200px";
                            let prefix = appPreviewInFocus.substring(0, appPreviewInFocus.indexOf("-"));
                            document.getElementById(prefix+"-description-container").style.opacity = 0;
                            document.getElementById(prefix+"-view-site-button-container").style.opacity = 0;
                            
                            setTimeout(function(){
                                document.getElementById(prefix+"-description-container").style.display = "none";
                                document.getElementById(prefix+"-view-site-button-container").style.display = "none";
                            }, 500);
                            
                            document.getElementById(prefix+"-description-container").style.fontSize = "0px";
                            document.getElementById(prefix+"-view-site-button-container").style.fontSize = "0px";
                        }
                        if(appPreviewInFocus!="tsh-venture-option-container"){
                            document.getElementById("tsh-venture-option-container").style.height = "50%";
                            document.getElementById("tsh-venture-option-container").style.lineHeight = "50px";
                            
                            document.getElementById("tsh-description-container").style.display = "block";
                            document.getElementById("tsh-description-container").style.opacity = 1.0;
                            document.getElementById("tsh-view-site-button-container").style.display = "block";
                            document.getElementById("tsh-view-site-button-container").style.opacity = 1.0;

                            document.getElementById("tsh-description-container").style.fontSize = "20px";
                            document.getElementById("tsh-view-site-button-container").style.fontSize = "20px";
                            setTimeout(function(){
                                appPreviewInFocus = "tsh-venture-option-container";
                            }, 550);
                        }
                        else{
                            appPreviewInFocus = null;
                        }
                        break;
                    default:
                        console.log("no specific functionality defined for this target.");
                    break;
                }
                console.log("------------------------------------");
            }
        }
    ],
    selector: [],

};

var appPreviewInFocus = null;

function pp(){
    console.log("scroll to top of [5]");
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#main-options-page-container").offset().top
    }, 1000);
}

function qq(){
    console.log("scroll to top of [0]");
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home-page-container").offset().top
    }, 1000);
}

function rr(){
    console.log("scroll to top of [12]");
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#market-option-page-container").offset().top
    }, 1000);
}
