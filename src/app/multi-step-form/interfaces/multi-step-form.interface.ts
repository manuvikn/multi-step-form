export interface MultiStepFormInterface {
    navBarTitle: string,
    formContent: {
        formGroupName: string,
        title: string,
        subtitle: string,
        formControls: Array<FormControlInterface>
    }
};

export interface FormControlInterface {
    type: 'text' | 'email' | 'number' | 'phone' | 'checkbox' | 'submit' | 'radio',
    label?: string,
    name?: string,
    placeholder?: string,
    class?: string,
    options?: Array<{
        type: string,
        label: string,
        class: string
    }>
}