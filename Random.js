class Random {

    static number(min, max) {
        // Certifique-se de que o valor mínimo seja menor que o valor máximo
        if (min >= max) {
          throw new Error('O valor mínimo deve ser menor que o valor máximo.');
        }
      
        // Gera um número aleatório entre 0 (inclusive) e 1 (exclusivo)
        const random = Math.random();
      
        // Ajusta o número para o intervalo entre min e max
        const randomNumber = Math.floor(random * (max - min + 1)) + min;
      
        return randomNumber;
      }

    static color(min,max){
        let r = Math.floor(this.int(0,255))
        let g = Math.floor(this.int(0,255))
        let b = Math.floor(this.int(0,255))
        let c = "rgb(" + r + "," + g + "," + b + ")";
        return c;
    }
    static int(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min
    }


}