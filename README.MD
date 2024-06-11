# youtube
https://www.youtube.com/watch?v=U60MdJeov_0

# docker compose up

# docker exec -it  <container_name> sh

# ls 

# cat default.conf.template

# cd ..

# ls => conf.d   

# cat <conf.d_>

# env
SERVER_PORT=8888
SERVER_HOST=node-c
NGINX_PORT=9999
NGINX_HOST=nginx-c

# ${NGINX_PORT} กำหนดพอร์ตที่ Nginx จะฟังการร้องขอจากภายนอก (9999 ในกรณีนี้)
# ${NGINX_HOST} กำหนดชื่อเซิร์ฟเวอร์ของ Nginx
# ${SERVER_HOST} กำหนดชื่อเซิร์ฟเวอร์ภายใน (Node.js container ในกรณีนี้)
# ${SERVER_PORT} กำหนดพอร์ตที่เซิร์ฟเวอร์ภายในฟังการร้องขอ (8888 ในกรณีนี้)

# ตัวอย่างการทำงาน:
# การร้องขอจากภายนอก: ผู้ใช้ทำการร้องขอ (เช่น เปิดเว็บเบราว์เซอร์และไปที่ http://localhost:9999).
# การรับการร้องขอโดย Nginx: Nginx (container nginx-c) รับการร้องขอที่พอร์ต 9999.
# การส่งต่อการร้องขอ: Nginx ทำหน้าที่เป็น reverse proxy และส่งต่อการร้องขอนั้นไปยัง Node.js server (container node-c) ที่พอร์ต 8888.
# การตอบสนองจาก Node.js server: Node.js server ตอบสนองการร้องขอ และส่งข้อมูลกลับผ่าน Nginx ไปยังผู้ใช้.
