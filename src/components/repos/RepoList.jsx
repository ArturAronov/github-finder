import PropTypes from 'prop-types';
import RepoItem from './RepoItem'

function RepoList({repos}){
  return(
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className='card-body'>
        <h2 className='tex-3xl font-bold card-tile'>
          Latest Repositories 
        </h2>
        {repos.map(element=>{
          return (
            <h2 key={element.id}>
              <RepoItem repo={element}/>
            </h2>
          )
        })}
      </div>
    </div>
  );
};

RepoList.propTypes={
  repos: PropTypes.array.isRequired,
};

export default RepoList;