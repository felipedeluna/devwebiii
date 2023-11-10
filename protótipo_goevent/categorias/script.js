        // Definimos as variáveis
        var banners = document.querySelectorAll(".banner");
        var b_1 = 1;
        var b_2 = 2;
        var b_3 = 3;
        var b_4 = 4;
        var b_5 = 5;
        var quant_banners = 7;

        // Definimos as funções
        function proximo_sl() {
        
            if (b_1 < 7) {
                b_1++;
            } else {
                b_1 = 1;
            }
            if (b_2 < 7) {
                b_2++;
            } else {
                b_2 = 1;
            }
            if (b_3 < 7) {
                b_3++;
            } else {
                b_3 = 1;
            }
            if (b_4 < 7) {
                b_4++;
            } else {
                b_4 = 1;
            }
            if (b_5 < 7) {
                b_5++;
            } else {
                b_5 = 1;
            }
        
            banner_1.setAttribute("src", `../assets/imgs/banner-${b_1}.jpg`);
            banner_2.setAttribute("src", `../assets/imgs/banner-${b_2}.jpg`);
            banner_3.setAttribute("src", `../assets/imgs/banner-${b_3}.jpg`);
            banner_4.setAttribute("src", `../assets/imgs/banner-${b_4}.jpg`);
            banner_5.setAttribute("src", `../assets/imgs/banner-${b_5}.jpg`);
        }

        function anterior_sl() {
            if (b_1 > 1) {
                b_1--;
            } else {
                b_1 = 7;
            }
            if (b_2 > 1) {
                b_2--;
            } else {
                b_2 = 7;
            }
            if (b_3 > 1) {
                b_3--;
            } else {
                b_3 = 7;
            }
            if (b_4 > 1) {
                b_4--;
            } else {
                b_4 = 7;
            }
            if (b_5 > 1) {
                b_5--;
            } else {
                b_5 = 7;
            }
        
            banner_1.setAttribute("src", `../assets/imgs/banner-${b_1}.jpg`);
            banner_2.setAttribute("src", `../assets/imgs/banner-${b_2}.jpg`);
            banner_3.setAttribute("src", `../assets/imgs/banner-${b_3}.jpg`);
            banner_4.setAttribute("src", `../assets/imgs/banner-${b_4}.jpg`);
            banner_5.setAttribute("src", `../assets/imgs/banner-${b_5}.jpg`);
        }

        // Inicialização
        var banner_1 = document.querySelector("#banner-1");
        banner_1.setAttribute("src", "../assets/imgs/banner-1.jpg")

        var banner_2 = document.querySelector("#banner-2");
        banner_2.setAttribute("src", "../assets/imgs/banner-2.jpg")

        var banner_3 = document.querySelector("#banner-3");
        banner_3.setAttribute("src", "../assets/imgs/banner-3.jpg")

        var banner_4 = document.querySelector("#banner-4");
        banner_4.setAttribute("src", "../assets/imgs/banner-4.jpg")
        
        var banner_5 = document.querySelector("#banner-5");
        banner_5.setAttribute("src", "../assets/imgs/banner-5.jpg")
