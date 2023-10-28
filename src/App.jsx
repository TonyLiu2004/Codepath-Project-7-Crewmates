import { useState, useEffect } from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { supabase } from './client'
import CreateCard from './assets/pages/CreateCard'
import EditCard from './assets/pages/EditCard'
import ReadCard from './assets/pages/ReadCard'
import Home from './assets/pages/Home.jsx'

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    
    // read all post from table
    const fetchPosts = async () => {
      const {data} = await supabase
      .from('crewmates')
      .select()
      .order('created_at', { ascending: true })

      // set state of posts
      setPosts(data)

    }

    fetchPosts()

  }, []);
  let element = useRoutes([
    {
      path:"/",
      element:<Home></Home>
    },
    {
      path: "/gallery",
      element:<ReadCard data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditCard data={posts} />
    },
    {
      path:"/create",
      element: <CreateCard />
    }
  ]);
  return (

    <div className="App">

      <div className="header">
        <Link to="/gallery"><button className="header-button"> Gallery </button></Link>
        <Link to="/create"><button className="header-button"> Create </button></Link>
      </div>
        {element}
    </div>
  )
}

export default App
