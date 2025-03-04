// Cập nhật năm hiện tại trong footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Xử lý form liên hệ
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Lấy dữ liệu từ form
  const formData = {
    name: e.target.elements[0].value,
    email: e.target.elements[1].value,
    subject: e.target.elements[2].value,
    message: e.target.elements[3].value,
  };

  // Đây là nơi bạn sẽ thêm code để xử lý dữ liệu form
  // Ví dụ: gửi dữ liệu đến server thông qua API
  console.log("Form data:", formData);

  // Thông báo gửi thành công (trong thực tế, bạn nên kiểm tra kết quả từ server)
  alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.");

  // Reset form
  e.target.reset();
});

// Scroll mượt cho các liên kết nội bộ
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 20,
        behavior: "smooth",
      });
    }
  });
});

// Hiệu ứng hiển thị cho các phần khi cuộn
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

// Thiết lập ban đầu cho hiệu ứng xuất hiện
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  // Kích hoạt hiệu ứng cho các phần có thể nhìn thấy ngay từ đầu
  setTimeout(() => {
    window.dispatchEvent(new Event("scroll"));
  }, 100);
});
