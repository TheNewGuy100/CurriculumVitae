// STATUS HANDLER FOR BOOLEAN BUTTONS.
export const handleAnimation = (
    elementId: string,
    lastVariableStatus: boolean,
    animationTime: number,
    divAnimation: string
) => {
    if (lastVariableStatus === false) {
        (document.getElementById(elementId) as HTMLElement).classList.add(divAnimation);
        lastVariableStatus = true;

      setTimeout(() => {
        lastVariableStatus = false;
        (document.getElementById(elementId) as HTMLElement).classList.remove(divAnimation);
      }, animationTime);
    }
}