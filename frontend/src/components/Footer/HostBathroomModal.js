
import NewBathroom from "../../components/NewBathroomModal/NewBathroom";
import { useContext } from 'react';
import  BathroomModalRef  from '../../context/NewBathroomModal';

function HostBathroomModal(){
    const { formModalRef, hideShowBackground } = useContext(BathroomModalRef);

    return (
        <>
            <div className="host-modal-button" onClick={hideShowBackground}>
                Host your bathroom
            </div>
            <NewBathroom prop={formModalRef}/>

        </>
    )
}
// creates element and hides it from u and passes props to the element we rendering
export default HostBathroomModal;
