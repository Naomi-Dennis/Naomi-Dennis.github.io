'use strict'

var loc = ''
var current_page = 0; 
var blog_names = [] 
blog_names = [
    'js_string_template.html',
    'rails_asset_pipeline.html',
    'pos_system.html'
    
];

loc = window.location.toString().split('/').pop()

function init(){
    load_blog()
    lastBlog()
    nextBlog()
}
function getCurrentPage(){
    current_page = blog_names.indexOf(loc)
}
function isLastPage(){
  return (current_page + 1) >= (blog_names.length)
}
function isFirstPage(){
   return current_page == 0
}
function setBlogPost(name){
   
    let domain = ''
    domain = window.location.toString().split('/')
    domain.pop()
    if(!domain.includes("blog_posts")){
        domain.push("blog_posts")
    }
    domain.push(name)
    domain = domain.join("/")
   window.location.href = domain 
   
}
function load_blog(){
    let post = ''

    if (loc != 'blog.html'){
        getCurrentPage()
    }

    post = blog_names[current_page]
    if(loc == 'blog.html'){
        setBlogPost(post)
    }
}
function setOnClick(button_name, page){
    let button = {}
    button = document.getElementById(button_name)
    button.onclick = () => setBlogPost(blog_names[page])
}
function hideButton(button_id){
    let button = {}
    button = document.getElementById(button_id)
    button.style = 'display:none'
  
}


function nextBlog(){
    if(!isLastPage()){
      setOnClick("next-button", current_page + 1)
    }
    else{
      
        hideButton("next-button")
    }
}

function lastBlog(){
    if(!isFirstPage()){
        setOnClick("prev-button", current_page - 1)
    }
    else{
       
        hideButton("prev-button")
    }
}

// 

init()