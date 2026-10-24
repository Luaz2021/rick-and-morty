// Helpers para cálculo de ubicaciones y extracción de IDs

export const randomLocation = () => {
    // La API de Rick and Morty tiene 126 ubicaciones (IDs del 1 al 126)
    return Math.floor(Math.random() * 126) + 1;
};

export const generalId = (char = '') => {
    if (!char || typeof char !== 'string') return '';
    const arr = char.split('/');
    return arr[arr.length - 1] || '';
};
