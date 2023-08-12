window.onload = function() {
  return getAbstract();
}

/**
 * 截取摘要
 */
function getAbstract() {
    let arts = document.getElementsByTagName('article');
    if (arts.length <= 1) {
        console.log("不在主页！");
        return ;
    }
    for (let i = 0; i < arts.length; i++) {
        let dom = arts[i];
        // process post body
        let button = dom.getElementsByClassName("post-button")[0];
        let body = dom.getElementsByClassName("post-body")[0];
        body.removeChild(button);

        // resolve abstract content
        let content = body.textContent;
        content = content.substring(0, 250) + "......";
        body.innerHTML = content;

        // append post button
        body.appendChild(button);
    }
}
