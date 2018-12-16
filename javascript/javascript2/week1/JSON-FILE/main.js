// creating the modulus curriculum function

const l = repo.length;

function modulesCurriculum (){
    const ul = document.createElement("ul");
    const aUl = document.createElement("ul");
    const javaScript = "JavaScript1";
    const git = "Git";
    const html = "HTML-CSS";
    const cl = "CommandLine";

    

    for( i=0; i<l; i++){
        if (repo[i].name==git || repo[i].name==html || repo[i].name==cl || repo[i].name==javaScript){

            const li = document.createElement("li")
            
            li.innerHTML = "Module Name: " + repo[i].name;

            const detail = document.createElement("li")
            
            detail.innerHTML = "stargazers: "+ repo[i].stargazers_count + "</br>" +

            "forks: " + repo[i].forks + "</br>" + "language:" + repo[i].language + "</br>" + "watchers: " + repo[i].watchers;

            aUl.appendChild(detail);

            ul.appendChild(li);
        }
    }

    document.getElementById("mymodules").appendChild(ul);
    document.getElementById("mymodules").appendChild(aUl);
}

modulesCurriculum();