import { useState, useEffect } from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { supabase } from './client'
import CreateCard from './assets/pages/CreateCard'
import EditCard from './assets/pages/EditCard'
import ReadCard from './assets/pages/ReadCard'

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
      path: "/",
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
        <h1>Crewmates!</h1>
        <Link to="/"><button className="header-button"> Gallery </button></Link>
        <Link to="/create"><button className="header-button"> Create </button></Link>
      </div>
        {element}
    </div>
  )
}

export default App
