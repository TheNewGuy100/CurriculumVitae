import { LoginModel } from "src/models/global.models";
import { handleAnimation } from "src/utils/global.util";

export class buttonClickEventAndAnimationModel {
    buttonId!: string
    buttonStatusVariable!: boolean
    timeDurationInMilliseconds!: number
    divAnimation!: string
}


export class WelcomePageScripts {
    constructor() {}

    public static async loginUserWithButtonAnimation (
        userLoginData: LoginModel,
        buttonData: buttonClickEventAndAnimationModel
    ) {
        const { buttonId, buttonStatusVariable, divAnimation, timeDurationInMilliseconds } = buttonData
        handleAnimation(buttonId, buttonStatusVariable, timeDurationInMilliseconds, divAnimation)

        console.log(userLoginData);
    }
}