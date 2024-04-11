import React, { ReactElement } from 'react';

interface Props {
    children: ReactElement;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='text-title color-gray-dark align-center'>
                    مشکلی پیش آمده است! لطفا صفحه را رفرش کنید.
                </div>
            );
        }

        return this.props.children;
    }
}
