const GITHUB_URL=process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN=process.env.REACT_APP_GITHUB_TOKEN;

export const searchUsers=async(text)=>{
  const params=new URLSearchParams({
    q: text
  });

  //this is because Github search user API is as follows: https://api.github.com/search/users?q=artur
  const response=await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: GITHUB_TOKEN
    }
  });

  console.log(response)

  const {items}=await response.json();

  return items;
};


//Single user
export const getUser=async(login)=>{
  //this is because Github search user API is as follows: https://api.github.com/search/users?q=artur
  const response=await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: GITHUB_TOKEN
    }
  });

  if(response.status===404){
    window.location='/notfound'
  }else{
    const data=await response.json();
    return data;
  }
};

//Get repos
export const getUserRepos=async(login)=>{
  const params=new URLSearchParams({
    sort: 'created',
    per_page: 10
  })

  //this is because Github search user API is as follows: https://api.github.com/search/users?q=artur
  const response=await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: GITHUB_TOKEN
    }
  });

  const data=await response.json();

  return data;
};
