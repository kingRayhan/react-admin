import { Container } from 'unstated'

class Loading extends Container {
    state = {
        loading: false,
    }

    startLoading = () => {
        this.setState({ loading: true })
    }

    stopLoading = () => {
        this.setState({ loading: false })
    }
}

export default Loading
