const BLOG_LIST = document.querySelector('.blogs')
const BLOG_CONTENT = [document.createElement('div'), document.createElement('h1'), document.createElement('p')]


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
})
  .then((response) => response.json())
  .then((json) => json.forEach((blog) => add_blog(blog)))

function add_blog(blog) {
    let new_blog = document.createElement('div')
    let new_blog_title = document.createElement('h1')
    let new_blog_body = document.createElement('p')

    new_blog.classList.add('blog')
    new_blog.append(new_blog_title)
    new_blog.append(new_blog_body)
    new_blog.firstChild.textContent = blog['title']
    new_blog.lastChild.textContent = blog['body']
    BLOG_LIST.append(new_blog)
    
    
}