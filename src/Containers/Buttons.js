// import React from 'react';
// import { Green, Red, Blue } from '../Components/Buttons';

// export class Buttons extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             color: "",
//         }
//     }

//     handleClick = (background) => {
//         console.log('works');
//         this.setState(() => ({
//             color: background
//         }));
//     }

//     render() {
//         return (
//             <div>
//                 <Green color={{ backgroundColor: this.state.color || "green" }} handleClick={this.handleClick} />
//                 <Red color={{ backgroundColor: this.state.color || "red" }} handleClick={this.handleClick} />
//                 <Blue color={{ backgroundColor: this.state.color || "blue"}} handleClick={this.handleClick} />
//             </div>
//         )
//     }
// }