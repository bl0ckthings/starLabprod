import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="dropdown">
            <button onClick={toggleOpen} className="dropdown-btn">
                Dropdown
            </button>
            <div className={`dropdown-content ${isOpen ? 'showSrcChain' : ''}`}>
                <div >zkSync Era </div>
                <div>Optimism</div>
                <div>Link 3</div>
                <div>Optimism</div>
                <div>Optimism</div>

                <div>Optimism</div>
                <div>Optimism</div>
                <div>Optimism</div>
                <div>Optimism</div>
                <div>Optimism</div>
                <div>Optimism</div>

            </div>
        </div>
    );
};

export default Dropdown;

{
    //     <DropdownContainer>
    //     <div>
    //         {/* Source chain dropdown */}
    //         {/* ... */}
    //     </div>
    //     <SwapButton>
    //         {/* ... */}
    //     </SwapButton>
    //     <div>
    //         {/* Destination chain dropdown */}
    //         <DropdownList
    //             onClick={handleToggleDistChain}
    //             className={`dropdown-btn ${isOpenDistChain ? 'open' : ''}`}
    //             value={selectedDestinationChain}
    //             onChange={handleDestinationChainChange}
    //         >
    //             {layer0Chain.map(chain => (
    //                 <option
    //                     key={chain.chainName}
    //                     value={chain.chainName}
    //                     disabled={incompatibleChains.includes(chain.chainName)}
    //                 >
    //                     {chain.chainDisplay}
    //                 </option>
    //             ))}
    //         </DropdownList>
    //         <div className={`dropdown-content ${isOpenDistChain ? 'show' : ''}`}>
    //             {/* Dropdown content */}
    //         </div>
    //     </div>
    // </DropdownContainer>
}




//  <DropdownContainer>
//           <div>
//             <DropdownLabel htmlFor="sourceChain"></DropdownLabel>
//             {/* <DropdownList id="sourceChain" onChange={(e) => handleSourceChainChange(e)}>
//               <option value="zkSyncEraTestnet">zkSync</option>
//               <option value="optimism">Optimism</option>

//             </DropdownList> */
// /* <DropdownList className="dropdown" >  }
//             <DropdownList onClick={toggleOpen} className="dropdown-btn">
//               zkSyncEra
//             </DropdownList>
//             <div className={`dropdown-content ${isOpen ? 'showSrcChain' : ''}`}>
//               <div >zkSync Era </div>
//               <div>Optimism</div>
//               <div>Link 3</div>
//               <div>Optimism</div>
//               <div>Optimism</div>

//               <div>Optimism</div>
//               <div>Optimism</div>
//               <div>Optimism</div>
//               <div>Optimism</div>
//               <div>Optimism</div>
//               <div>Optimism</div>

//             </div>

//           </div >
//           <SwapButton>
//             <SwapImage src={swapImage} alt="Swap" />
//           </SwapButton>
//           <div>
//             <DropdownLabel htmlFor="destinationChain"></DropdownLabel>
//             <DropdownList id="destinationChain" onChange={(e) => handleDestinationChainChange(e)}>
//               {layer0Chain.map(chain => (
//                 <option key={chain.chainName}
//                   value={chain.chainName}
//                   disabled={incompatibleChains.includes(chain.chainName)}>
//                   {chain.chainDisplay}
//                 </option>
//               ))}
//             </DropdownList> */}