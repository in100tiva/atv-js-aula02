var idade = prompt('Digite sua idade:')

if (idade >= 16 && idade < 18) {
    console.log('Você pode votar mesmo nao sendo maior de idade, porem não é obrigatorio.')
} 

else if (idade >= 18 && idade < 65) {
    console.log(`Você é obrigado a votar! sua idade é ${idade}`)
}

else if (idade >= 65) {
    console.log('Você ainda tem esperança?')
}

else {
    console.log('Você não pode votar!')
}