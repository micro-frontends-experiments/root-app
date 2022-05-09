import React from 'react';
import axios from 'axios';

class MicroAppLoader extends React.Component {
  componentDidMount() {
    const { name, host, document } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroApp();
      return;
    }

    axios(`${host}/asset-manifest.json`)
      .then(({ data: manifest }) => {
        console.log('manifest: ', manifest);
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${process.env.NODE_ENV === 'production' ? host.slice(0, host.lastIndexOf('/')) : host}${manifest.files['main.js']}`;
        script.onload = this.renderMicroApp;
        document.head.appendChild(script);
      });
  }

  componentWillUnmount() {
    const { name, window } = this.props;

    if (window[`unmount${name}`]) {
      window[`unmount${name}`](`${name}-container`);
    }
  }

  renderMicroApp = () => {
    const {
      name, window, history, resolvers,
    } = this.props;

    if (window[`render${name}`]) {
      window[`render${name}`](`${name}-container`, history, resolvers);
    }
  };

  render() {
    const { name } = this.props;
    return <div id={`${name}-container`} style={{ width: '100%', height: '100%' }} />;
  }
}

MicroAppLoader.defaultProps = {
  document,
  window,
};

export default MicroAppLoader;
