// Hiển thị/Ẩn menu
function toggleMenu() {
    // Lấy phần tử có id là "menu"
    const menu = document.getElementById("menu");

    // Kiểm tra trạng thái hiển thị hiện tại
    if (menu.style.display === "block") {
        // Nếu đang hiển thị thì ẩn đi
        menu.style.display = "none";
    } else {
        // Nếu đang ẩn thì hiển thị ra
        menu.style.display = "block";
    }
    // 👉 Hàm này dùng để hiển thị hoặc ẩn menu khi người dùng bấm nút (thường dùng cho menu responsive hoặc mobile).
}

// Chuyển tab (Nóng/Mới/Video/Chủ đề)
function showTab(tabName) {
    // Ẩn tất cả các tab nội dung
    document.getElementById("nongTab").style.display = "none";
    document.getElementById("moiTab").style.display = "none";
    document.getElementById("videoTab").style.display = "none";
    document.getElementById("chudeTab").style.display = "none";

    // Hiển thị tab được chọn dựa trên tên truyền vào
    if (tabName === "nong") {
        document.getElementById("nongTab").style.display = "flex";
    } else if (tabName === "moi") {
        document.getElementById("moiTab").style.display = "flex";
    } else if (tabName === "video") {
        document.getElementById("videoTab").style.display = "flex";
    } else if (tabName === "chude") {
        document.getElementById("chudeTab").style.display = "flex";
    }

    // Cập nhật hiệu ứng "active" cho thanh điều hướng
    const navItems = document.querySelectorAll(".navbar ul li");
    navItems.forEach(item => {
        item.classList.remove("active"); // Xóa class active khỏi tất cả
        if (item.textContent.toLowerCase() === tabName) {
            item.classList.add("active"); // Gán lại class active cho tab được chọn
        }
    });

    // 👉 Hàm này dùng để chuyển đổi giữa các tab nội dung (giống như một menu đa mục).
    // Khi người dùng bấm vào một tab, tab đó sẽ hiện ra và các tab khác sẽ bị ẩn.
}

// Hiển thị modal đăng nhập
function showLoginModal() {
    // Cho phần tử modal hiện ra
    document.getElementById("loginModal").style.display = "block";

    // 👉 Hàm này hiển thị cửa sổ đăng nhập khi người dùng bấm vào nút "Đăng nhập".
}

// Đóng modal đăng nhập
function closeLoginModal() {
    // Ẩn modal
    document.getElementById("loginModal").style.display = "none";

    // 👉 Hàm này đóng cửa sổ đăng nhập khi người dùng bấm nút "X" hoặc ngoài vùng modal.
}

// Kích hoạt nút Đăng nhập Zalo khi checkbox được chọn
document.getElementById("termsCheckbox").addEventListener("change", function() {
    const loginButton = document.querySelector(".zalo-login-btn");

    // Bật/tắt nút đăng nhập dựa theo trạng thái checkbox
    loginButton.disabled = !this.checked;

    // 👉 Đoạn này giúp người dùng phải tích chọn đồng ý điều khoản trước khi bấm đăng nhập Zalo.
});

// Hàm xử lý đăng nhập Zalo (giả lập)
function loginWithZalo() {
    // Hiển thị thông báo đăng nhập thành công
    alert("Đăng nhập với Zalo thành công!");

    // Ẩn modal đăng nhập
    closeLoginModal();

    // 👉 Hàm này giả lập thao tác đăng nhập Zalo thành công (chưa kết nối thật).
    // Sau khi "đăng nhập", modal được đóng lại.
}
