function numberFormatter(value) {
    return new Intl.NumberFormat('ru-RU', {}).format(value)
}

export {
    numberFormatter
}