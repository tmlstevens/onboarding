import React from 'react';
import '../FormInput/style.css';
import { FormGroup, Label, Input } from 'reactstrap';


function MyFormGroup(props) {

    return (
        <FormGroup row={props.fgpRow}>
            <Label 
                for={props.lblFor} 
                className={props.lblClass}
            >
                {props.label}
            </Label>
            <Input
                type={props.inpType} 
                name={props.inpName} 
                id={props.inpId} 
                placeholder={props.inpPlaceholder} 
                className={props.inpClass} 
            />
        </FormGroup>
    )
}
export default MyFormGroup;