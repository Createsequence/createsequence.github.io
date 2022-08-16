$(function(){
    console.log("welcome to createsequence's blog :)");
    processing();
})

/**
 * 处理文章页面 
 */
function processing() {
    // 是否在文章详情页面
    if($('article').length <= 1) {
        article().init();
    }else {
        articleList().init();
    }
}

/**
 * 文章列表
 */
function articleList() {

    /**
     * 添加自定义容器.custom-article-list
     */
    function addCustomDiv() {
        $('.post-block').each(function(index, ele) {
            let content = $(ele).html();
            content = '<div class="custom-article-list">' + content + '</div>'
            $(ele).html(content);
        })
    }

    /**
     * 为每一篇文章截取摘要
     */
    function getAbstract() {
        $('.post-body').each(function(index, ele) {
            let content = $(ele).text();
            content = content.length > 250 ?
                content.substring(0, 250) + "......" : content;
            let readAll = $(ele).find('.post-button');
            $(ele).html(content).append(readAll);
        })
    }

    function init() {
        addCustomDiv();
        getAbstract();
    }

    return {
        init, 
        addCustomDiv, 
        getAbstract
    }
}

/**
 * 文章详情
 */
function article() {
    
    /**
     * 添加自定义容器.custom-article
     */
    function addCustomDiv() {
        let post = $('article').find('.post-body');
        let content = $(post).html();
        content = '<div class="custom-article">' + content + '</div>'
        $(post).html(content);
    }

    /**
     * 为文章标题添加超链接
     */
    function addTitleLink() {
        let title = $('h1');
        let href = window.location.href;
        let a = $('<a>', {
            class : 'post-title-link',
            href: href,
            text: $(title).text()
        });
        $(title).html(a);
    }

    /**
     * 为删除默认为image的图片标题
     */
    function delDefaultImgTitle() {
        // 删除image开头的图片标题
        $('figcaption').each(function(index, ele) {
            if ($(ele).text().indexOf('image') > -1) {
                $(ele).remove();
            }
        })
    }

    function changeDisplay() {
        $('.post-toc .nav .nav-child').each(function(index, ele) {
            $(ele).removeAttr('display');
        })
    }

    function init() {
        changeDisplay();
        addCustomDiv();
        addTitleLink();
        delDefaultImgTitle();
    }

    return {
        changeDisplay,
        init, 
        addCustomDiv, 
        addTitleLink, 
        delDefaultImgTitle
    }
}