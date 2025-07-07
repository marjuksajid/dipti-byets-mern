import apurbaMsg from "./default";
import { apurba } from "./exportFunc";

const colle = () => {
    return "College is a time waste";
}
const apurba = () => {
    return "Ziaul Farooooq";
}
const apurbaMsg = () => {
    return "Apurba has a quote!";
}

module.experts = {colle, apurba};
module.experts.default = apurbaMsg;