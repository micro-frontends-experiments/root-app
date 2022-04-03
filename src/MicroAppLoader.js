import React from 'react';

class MicroAppLoader extends React.Component {
    componentDidMount() {
        const { name, host, document } = this.props;
        const scriptId = `micro-frontend-script-${name}`;

        if (document.getElementById(scriptId)) {
            return this.renderMicroApp();
        }

        fetch(`${host}/asset-manifest.json`)
            .then(res => res.json())
            .then(manifest => {
                console.log('manifest: ', manifest);
                const script = document.createElement('script');
                script.id = scriptId;
                script.crossOrigin = '';
                script.src = `${process.env.NODE_ENV === "production" ? host.slice(0, host.lastIndexOf('/')) : host}${manifest["files"]["main.js"]}`;
                script.onload = this.renderMicroApp;
                document.head.appendChild(script);
            });
    }

    componentWillUnmount() {
        const { name, window } = this.props;

        window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
    }

    renderMicroApp= () => {
        const { name, window, history } = this.props;

        window[`render${name}`] && window[`render${name}`](`${name}-container`, history);
    };

    render() {
        return <div id={`${this.props.name}-container`} style={{width: "100%"}} />;
    }
}

MicroAppLoader.defaultProps = {
    document,
    window,
};

export default MicroAppLoader;