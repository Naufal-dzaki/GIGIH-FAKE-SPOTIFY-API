import development from '../config/development.json' assert { type: "json" }

const readConfig = () => {
    return development;
}

export default readConfig;