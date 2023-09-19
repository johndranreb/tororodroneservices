import { getPostList } from "../../lib/post";
import { useState } from "react";

export default function LoadMore({posts, setPosts}) {

  const [buttonText, setButtonText] = useState('Load more');
  const [buttonDisabled, setButtonDisabled] = useState(false);


  const handleOnClick = async (event) => {

    setButtonText('Loading...');
    setButtonDisabled(true);

    const morePosts = await getPostList(posts.pageInfo.endCursor);

    let updatedPosts ={
      pageInfo: {

      },
      nodes: []
    }
    updatedPosts.pageInfo = morePosts.pageInfo;

    posts.nodes.map((node) => {
      updatedPosts.nodes.push(node); 
    });
    morePosts.nodes.map((node) => {
      updatedPosts.nodes.push(node);
    });

    setPosts(updatedPosts);

    if(morePosts.pageInfo.hasNextPage) {
      setButtonText('Load more');
      setButtonDisabled(false);
    }
      else{
        setButtonText('No more posts');
        setButtonDisabled(true);
      }
  }
  return (
    <button className="load-more font-bold bg-green-500 text-slate-900 px-4 py-2 hover:bg-green-700" onClick={handleOnClick} disabled ={posts.pageInfo.hasNextPage ? buttonDisabled :true}> 
     {posts.pageInfo.hasNextPage ? buttonText : 'No more posts'}
   </button>

   
  //   <div className="b animate-bounce mx-auto h-16 w-64 flex justify-center items-center mt-8 md:ml-96">
  //   <div className="i h-16 w-64 bg-gradient-to-br from-green-500 to-gray-500 items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
  //   </div>
  //   <a className="text-center text-white font-semibold z-10 pointer-events-none flex justify-content items-center"><span className=""><svg className="w-5 h-5 right-1.5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  //         <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
  //       </svg></span>Load More</a>
  // </div>
  )
}