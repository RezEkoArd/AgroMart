const ContactPage = {
  async render() {
    return `
<main>
    <div class="about_argoMart_container shadow bg-body-tertiary rounded">
        <div class="about_argoMart">
            <img class="about_argoMart_picture" src="./images/about_argoMart.jpg" alt="about argoMart picture">
            <h1>ABOUT ARGOMART</h1>
            <p>ArgoMart adalah website yang diharapkan dapat membantu petani agar lebih mudah
                menyalurkan hasil panen mereka, meningkatkan efisiensi dan keuntungan mereka,
                serta memberikan keuntungan bagi pembeli yang akan mendapatkan produk yang
                berkualitas dan harga yang adil. Selain itu, aplikasi ini juga akan membantu
                memperluas akses pasar bagi petani, sehingga mereka dapat meningkatkan
                kesejahteraan ekonomi para petani.</p>
      </div>
    </div>

        <div class="section-title">
            <h2>ABOUT US</h2>
            <p>Kami adalah mahasiswa - mahasiswi Indonesia yang berfokus dalam dunia Software Developer khususnya dalam bidang Front-End Web dan Back End.
                Misi kami kali ini adalah untuk membantu sesama terutama para petani disekitar kami.<br>
                Dengan adanya aplikasi ini, diharapkan petani dapat lebih mudah
                menyalurkan hasil panen mereka, meningkatkan efisiensi dan keuntungan mereka
            </p>
        </div>

        <div class="container">
          <div class="row ms-5">

            <!-- Team 1 -->
            <div class="col card-responsive" >
              <div class="card text-center shadow bg-body-tertiary rounded mb-4 " style="width: 15rem;">
                <img src="./images/team/giyu-bg.png" class="card-img-top" alt="Profile picture">
                <div class="card-body">
                  <h5 class="card-title">Diisi nama ygy</h5>
                  <p class="card-text fw-lighter">Front-End | Developer</p>
                  <p class="card-text"><a href="#" class="btn btn-primary">CONNECT</a></p>
                  <p class="card-text"><a href="#"><i class="bi bi-github" style="font-size: 20px;color:black"></i></a>
                    <a href="#"><i class="bi bi-discord" style="font-size: 20px;color:black;"></i></a>
                    <a href="#"><i class="bi bi-linkedin" style="font-size: 20px;color:black;"></i></a></p>
                </div>
              </div>
            </div>
            <!-- Team 2 -->
            <div class="col card-responsive">
                <div class="card text-center shadow bg-body-tertiary rounded mb-4" style="width: 15rem;">
                <img src="./images/team/giyu-bg.png" class="card-img-top" alt="Profile picture">
                <div class="card-body">
                    <h5 class="card-title">Muhamad Faisal Fiqri</h5>
                    <p class="card-text fw-lighter">Front-End | Developer</p>
                    <p class="card-text"><a href="#" class="btn btn-primary">CONNECT</a></p>
                    <p class="card-text"><a href="https://github.com/faisal-fiqri"><i class="bi bi-github" style="font-size: 20px;color:black;"></i></a>
                    <a href="discordapp.com/users/Fyqre#3526"><i class="bi bi-discord" style="font-size: 20px;color:black;"></i></a>
                    <a href="https://www.linkedin.com/in/muhamad-faisal-fiqri-520731209/"><i class="bi bi-linkedin" style="font-size: 20px;color:black;"></i></a></p>
                </div>
                </div>
            </div>
            <!-- Team 3 -->
            <div class="col card-responsive">
                <div class="card text-center shadow bg-body-tertiary rounded mb-4" style="width: 15rem;">
                  <img src="./images/team/giyu-bg.png" class="card-img-top" alt="Profile picture">
                  <div class="card-body">
                    <h5 class="card-title">Diisi nama ygy</h5>
                    <p class="card-text fw-lighter">Back-End | Developer</p>
                    <p class="card-text"><a href="#" class="btn btn-primary">CONNECT</a></p>
                    <p class="card-text"><a href="#"><i class="bi bi-github" style="font-size: 20px;color:black;"></i></a>
                      <a href="#"><i class="bi bi-discord" style="font-size: 20px;color:black;"></i></a>
                      <a href="#"><i class="bi bi-linkedin" style="font-size: 20px;color:black;"></i></a></p>
                  </div>
                </div>
              </div>
            <!-- Team 4 -->
            <div class="col card-responsive">
                <div class="card text-center shadow bg-body-tertiary rounded mb-4" style="width: 15rem;">
                  <img src="./images/team/giyu-bg.png" class="card-img-top" alt="Profile picture">
                  <div class="card-body">
                    <h5 class="card-title">Ayunita Putri</h5>
                    <p class="card-text fw-lighter">Front-End | Developer</p>
                    <p class="card-text"><a href="https://www.linkedin.com/in/ayunita-putri/" class="btn btn-primary">CONNECT</a></p>
                    <p class="card-text"><a href="https://github.com/Ayunitaputri"><i class="bi bi-github" style="font-size: 20px;color:black;"></i></a>
                      <a href="#"><i class="bi bi-discord" style="font-size: 20px;color:black;"></i></a>
                      <a href="https://www.linkedin.com/in/ayunita-putri/"><i class="bi bi-linkedin" style="font-size: 20px;color:black;"></i></a></p>
                  </div>
                </div>
              </div>
            </div>
      </div>
</main>
    `;
  },
 
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
 
export default ContactPage;