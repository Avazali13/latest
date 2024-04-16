import Heading from "../../ui/Heading"
import SuggestedUser from './SuggestedUser'

function SuggestedUsers() {
    return (
     <div>
        <Heading as='h3'>Suggested for you</Heading> 
        <SuggestedUser name='Avazali Aliyev' followers={1392} avatar='https://bit.ly/dan-abramov'/>
        <SuggestedUser name='Ryan Floerence' followers={567} avatar='https://bit.ly/ryan-florence'/>
        <SuggestedUser name='Chrisitan Beast' followers={759} avatar='https://bit.ly/code-beast'/>
        
     </div>
    )
}

export default SuggestedUsers
