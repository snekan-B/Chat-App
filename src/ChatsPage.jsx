import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage=(props)=>
{
    const chatProps=useMultiChatLogic(
        '2e5f72f7-e070-4106-aae8-828985379687',
    props.user.username,
    props.user.secret);

    return(
    <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:'100%'}} />

    </div>
)

}


export default ChatsPage
