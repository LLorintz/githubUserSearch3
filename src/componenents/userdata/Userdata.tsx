import './userdata.css'
import { UserType } from '../../type/usertype'
import Pin from './Pin'
import Link from './Link'
import Twitter from './Twitter'
import Github from './Github'


type userdatprops = {
    user: UserType
}

const Userdata = ({user}:userdatprops) => {
    const convertDate =(datetime?:string)=>{
        if (!datetime) {
            return 'unknown date'
        }
        const date = new Date(datetime);
        const day = date.getDate();
        const month = date.toLocaleString("default", {month:"short"})
        const year = date.getFullYear();
        return `${day} ${month} ${year}`
    }

    const joinDate = convertDate(user.created_at)
 
const displayName =(company:string|null|undefined)=>{
    if (!company) {
        return <p>not available</p>
    }
    return company.includes('@')?
    (<a href={`https://github.com/${company.slice(1)}`} target = "_blank">{company}</a>)
    :
    ( <p>{company}</p> )
    
}

    return (
    <div className='user-card'>
        <div className='user-top'>
            <img className='avatar' src={user.avatar_url} alt={user.name} />
            <div className='user-info'>
                <div className='user-info-inner'>
                    <h2 className='name'>{user.name?user.name:user.login}</h2>
                    <a className='login' href={`https://github.com/${user.login}`} target='_blank'>${user.login}</a>   
                </div>
            <p className='joined'>Joined {joinDate}</p>
            </div>
        </div>
        <div className='user-middle'>
            <p className={`bio ${!user.bio?'not-available':""}`}>{user.bio?user.bio:"This profile has no bio"}</p>
            <div className='stats'>
                <div className='stat'>
                    <h3 className='stat-title'>Repos</h3>
                    <p className='stat-number'>{user.public_repos}</p>
                </div>
                <div className='stat'>
                    <h3 className='stat-title'>Followers</h3>
                    <p className='stat-number'>{user.followers}</p>
                </div>
                <div className='stat'>
                    <h3 className='stat-title'>Following</h3>
                    <p className='stat-number'>{user.following}</p>
                </div>
            </div>
        </div>
        <div className='user-bottom'>
            <div className='links'>
                <div className={`link-wrapper ${!user.location?'not-available' :""}`}>
                    <Pin></Pin>
                    <p>{!user.location?"Not available":user.location}</p>
                </div>
                <div className={`link-warpper${!user.blog?"not-available":""}`}>
                    <Link></Link>
                    {!user.blog?
                    <p>Not available</p>:
                    <a href={user.blog} target='_blank' rel="noreferrer"> {user.blog}</a> }
                </div>
            </div>
            <div className='links'>
                  <div className={`link-wrapper ${user.twitter_username?"not-available":""}`}>
                    <Twitter></Twitter>
                    {
                        !user.twitter_username?
                        <p>Not available</p>:
                        <a href={`https://twitter.com/${user.twitter_username}`} target='_blank'>{user.twitter_username}</a>
                    }
                  </div> 
                  <div className={`link-wrapper ${!user.company?'not-available':""}`}>
                    <Github></Github>
                    {displayName(user.company)}
                  </div>         
            </div>
        </div>

    </div>
  )
}

export default Userdata