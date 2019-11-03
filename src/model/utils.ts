export const loadImages = (src: string, callBack: (src: string, index: number) => void = (x, z) => {}): void => {
    const executeLoad = (index: number) => {
        if (lstSrc.length <= index) {
            return;
        }

        const image = new Image();

        image.onload = () => {
            callBack(lstSrc[index], index);
            executeLoad(++index);
        };

        image.onerror = () => executeLoad(++index);

        image.src = lstSrc[index];
    };

    const lstSrc = ["Small", "Medium", ""].map(s => src.replace(/\./, `${s}.`));

    executeLoad(0);
};
