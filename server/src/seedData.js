const bcrypt = require('bcrypt');
const ModelUser = require('./model/ModelUser');
const ModelProducts = require('./model/ModelProducts');
const mongoose = require('mongoose');

// Dữ liệu mẫu cho người dùng
const users = [
    {
        fullname: 'Admin',
        email: 'admin@example.com',
        password: 'admin123',
        phone: '0987654321',
        isAdmin: true,
        isEmployee: false,
        avatar: '1',
    },
    {
        fullname: 'User Test',
        email: 'user@example.com',
        password: 'user123',
        phone: '0123456789',
        isAdmin: false,
        isEmployee: false,
        avatar: '1',
    },
];

// Dữ liệu mẫu cho sản phẩm
const products = [
    {
        id: 1,
        nameProducts: 'Áo Thun Basic Nam',
        priceNew: 200000,
        img: 'products/product1.jpg',
        checkProducts: 'fashionMen',
        checkType: 'áo',
        des: 'Áo thun basic dành cho nam, chất liệu cotton 100%, thoáng mát.',
        quantityPro: 50,
    },
    {
        id: 2,
        nameProducts: 'Quần Jean Slim Fit Nam',
        priceNew: 399000,
        img: 'products/product2.jpg',
        checkProducts: 'fashionMen',
        checkType: 'quần',
        des: 'Quần jean nam ống đứng, form slim fit, màu xanh đậm.',
        quantityPro: 30,
    },
    {
        id: 3,
        nameProducts: 'Váy Liền Thân Nữ',
        priceNew: 299000,
        img: 'products/product3.jpg',
        checkProducts: 'fashionWomen',
        checkType: 'váy',
        des: 'Váy liền thân dành cho nữ, thiết kế thanh lịch, phù hợp đi làm, đi chơi.',
        quantityPro: 25,
    },
    {
        id: 4,
        nameProducts: 'Áo Sơ Mi Nữ',
        priceNew: 280000,
        img: 'products/product4.jpg',
        checkProducts: 'fashionWomen',
        checkType: 'áo',
        des: 'Áo sơ mi nữ dài tay, chất liệu lụa mềm mại, thoáng mát.',
        quantityPro: 40,
    },
    {
        id: 5,
        nameProducts: 'Nước Hoa Chanel No.5',
        priceNew: 2500000,
        img: 'products/product5.jpg',
        checkProducts: 'nuocHoa',
        checkType: '',
        des: 'Nước hoa Chanel No.5 hương thơm quyến rũ, lâu phai.',
        quantityPro: 15,
    },
    {
        id: 6,
        nameProducts: 'Nến Thơm Vanilla',
        priceNew: 150000,
        img: 'products/product6.jpg',
        checkProducts: 'nenThom',
        checkType: '',
        des: 'Nến thơm hương vanilla, giúp thư giãn và tạo không gian ấm cúng.',
        quantityPro: 20,
    },
    {
        id: 7,
        nameProducts: 'Son Môi Dưỡng Ẩm',
        priceNew: 180000,
        img: 'products/product7.jpg',
        checkProducts: 'son',
        checkType: '',
        des: 'Son môi dưỡng ẩm, giữ màu lâu, không gây khô môi.',
        quantityPro: 35,
    },
    {
        id: 8,
        nameProducts: 'Giày Thể Thao Nam',
        priceNew: 850000,
        img: 'products/product8.jpg',
        checkProducts: 'fashionMen',
        checkType: 'giay',
        des: 'Giày thể thao nam, thiết kế hiện đại, thoáng khí và êm chân.',
        quantityPro: 25,
    },
    {
        id: 9,
        nameProducts: 'Giày Cao Gót Nữ',
        priceNew: 750000,
        img: 'products/product9.jpg',
        checkProducts: 'fashionWomen',
        checkType: 'giay',
        des: 'Giày cao gót nữ, thiết kế thanh lịch, phù hợp đi làm, đi tiệc.',
        quantityPro: 18,
    },
];

// Hàm seed dữ liệu
const seedData = async () => {
    try {
        // Kiểm tra xem đã có dữ liệu chưa
        const userCount = await ModelUser.countDocuments();
        const productCount = await ModelProducts.countDocuments();

        // Nếu đã có dữ liệu thì không cần seed nữa
        if (userCount > 0 && productCount > 0) {
            console.log('Dữ liệu đã tồn tại, không cần seed lại');
            return;
        }

        // Seed users nếu chưa có
        if (userCount === 0) {
            console.log('Đang seed dữ liệu người dùng...');

            for (const user of users) {
                const saltRounds = 10;
                const hashedPassword = await bcrypt.hash(user.password, saltRounds);

                await ModelUser.create({
                    ...user,
                    password: hashedPassword,
                });
            }

            console.log('Seed dữ liệu người dùng thành công!');
        }

        // Seed products nếu chưa có
        if (productCount === 0) {
            console.log('Đang seed dữ liệu sản phẩm...');
            await ModelProducts.insertMany(products);
            console.log('Seed dữ liệu sản phẩm thành công!');
        }

        console.log('Seed dữ liệu hoàn tất!');
    } catch (error) {
        console.error('Lỗi khi seed dữ liệu:', error);
    }
};

module.exports = seedData;
