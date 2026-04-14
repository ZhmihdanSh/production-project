import { Component } from 'react';
import { ErrorScreen } from 'widgets/ErrorScreen';
import type { ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError?: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error) {
        console.log(error);
    }

    render() {
        if (this.state.hasError)
            return <ErrorScreen />;

        return this.props.children;
    }
}
