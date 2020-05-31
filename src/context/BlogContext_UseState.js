import React, { useState } from 'react'

const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {

    const [blogPosts, setBlogPosts] = useState([])

    //helper function 
    const addBlogPost = () => {
        //create a new array and inside the arr take all the blogpost we have and add it to the new arr
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }])
    }

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext



//{children} allows yout to pass props as an argument inside a custom component

// Provider is what accepts information that will make available to all child components