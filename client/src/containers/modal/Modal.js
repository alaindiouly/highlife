

// import './Modal.css'
// import Modal from 'react-modal'


// Modal.setAppElement('#root');



// function ModalApp (){
//   const [modalIsOpen, setmodalisOpen] = useState(false);

//   return (
//     <Modal
//           isOpen={modalIsOpen}
//           onRequestClose={()=> setmodalisOpen(false)} className="modal"
//           style={
//             {
//               overlay: {
//                 backgroundColor:'grey',
//                 opacity: 0.8
//               },
//               content: {
//                 color: 'black'
//               }
//             }
//           }
//         >
//           <div className="wrapper">
//             <div className="wrapper__content">
//               <div className="content__cover">
//                 <img
//                   src={release.cover_image}
//                   alt="" className="cover__image"
//                 />
//               </div>
//               <div className="content__details">
//                 <p>{release.year}</p>

//                 <h1>{release.title}</h1>

//                 <button className="details--add-collection">ADD TO COLLECTION</button>



//               </div>
//             </div>
//             <div className="wrapper__video">{release.title}

//             </div>
//           </div>
//           <div className="modal__button">
//             <button
//             onClick={()=> setmodalisOpen(false)} className="modal--close">
//              X
//             </button>
//           </div>
//         </Modal>
//   );
// }

// export default ModalApp;