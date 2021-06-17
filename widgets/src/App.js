import React , {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

const items = [
    {
        title : 'What is React?' , 
        content : 'React is a front-end javascript framework'
    } , 
    {
        title : 'Why use React ?' ,
        content : 'React is a famous JS library among engineers'
    } ,
    {
        title : 'How do you use React ?' ,
        content : 'You use React by creating components'
    }
]

const options = [
    {
        label : 'The Color RED' , 
        value : 'red'
    } ,
    {
        label : 'the color green' ,
        value : 'green'
    } ,
    {
        label : 'A shade of Blue' ,
        value : 'blue'
    }
]

// const show_Accordion = () => {
//     if(window.location.pathname === '/') {
//         return <Accordion items = {items}/>
//     }
// }

// const show_List = () => {
//     if(window.location.pathname === '/list'){
//         return <Search />
//     }
// }

// const show_Dropdown = () => {
//     if(window.location.pathname==='/drowdown'){
//         return < Dropdown />
//     }
// }

// const show_Translate = () => {
//     if(window.location.pathname==='/translate'){
//         return <Translate />
//     }
// }

const App  = () => {
    const [selected , setSelected] = useState(options[0]);
    const[showDropdown , setShowDropdown] = useState(true);
    return (<div>
        {/* <Accordion items = {items}/> */}
        {/* < Search /> */}
        {/* <button onClick = {() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
        { showDropdown ?
        <Dropdown 
            selected = {selected} 
            options = {options}
            onSelectedChange = {setSelected}/> :null
        } */}
        {/* {show_Accordion()}
        {show_Dropdown()}
        {show_List()}
        {show_Translate()} */}
        {/* <Translate /> */}
        <Header />
        <Route path = '/'>
            <Accordion items = {items}/>
        </Route>
        <Route path = '/list'>
            <Search />
        </Route>
        <Route path='/dropdown'>
            <Dropdown 
                label = 'Select a color'
                options = {options}
                selected = {selected}
                onSelectedChange = {setSelected}/>
        </Route>
        <Route path = '/translate'>
            <Translate />
        </Route>
        </div>)
}

export default App;