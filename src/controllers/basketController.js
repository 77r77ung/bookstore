const db = require('../../database/book_db');

class basketController {

  // 장바구니 리스트
  async basketList(req, res, next) {
      const user_uid = req.session.user_uid

      let basketList = await db("SELECT book.book_number, book.book_name, book.book_amount, book.book_price AND basket.user_user_uid = ?", [user_uid])
      
      req.body.basketList = basketList

      next()

    } catch (error) {
      console.log(error)
    }

  // 장바구니 담기
  async goBasket(req, res, next) {
    try {
      const user_uid = req.session.user_uid

      const book_number = req.params["number"]

      const count = req.params["index"]

      if(count <= 0) {
        res.send('<script type="text/javascript">alert("도서 수량을 올바르게 적어주세요.");history.back();</script>');
      }

      let cartCheck = await db("SELECT * FROM CART WHERE USER_ID = ?", [userId])

      if(checkBasket.length <= 0) {
        await db("INSERT INTO basket SET ?", {
          user_uid: user_uid
        });
      }

      let basket = await db("SELECT * FROM BASKET WHERE user_uid = ?", [user_uid])

      let putCart =  await db("INSERT INTO CART_LIST SET ?", {
          CART_UID : cart[0].CART_UID,
          BOOK_UID : BOOK_UID,
          CART_COUNT : count
        })

      if (putCart.errno == 1062) {
        await db("UPDATE CART_LIST SET CART_COUNT = (CART_COUNT + ?) WHERE CART_UID = ? AND BOOK_UID = ?", [count, cart[0].CART_UID, BOOK_UID])
      }
      

      next()
      
    } catch (error) {
      console.log(error)
    }
  }

  // 장바구니 수정
  async updateBasket(req, res, next) {
    try {
      
      const userId = req.session.USER_ID
      const BOOK_UID = req.params["uid"]
      const count = req.params["index"]

      let cartId = await db("SELECT CART_UID FROM CART WHERE USER_ID = ?", [userId])

      await db("UPDATE CART_LIST SET CART_COUNT = ? WHERE CART_UID = ? AND BOOK_UID = ?", [count, cartId[0].CART_UID, BOOK_UID])

      next()

    } catch (error) {
      console.log(error)
    }
  }

  // 장바구니 삭제
  async deleteList(req, res, next) {
    try {

      if (req.session.USER_ID == null) {
        res.send(
          `<script type="text/javascript">
          alert("로그인을 하세요"); 
          location.href='/users/login';
          </script>`
        );
      }

      const userId = req.session.USER_ID

      const CART_UID = req.params["cart"]
      const BOOK_UID = req.params["book"]

      let cartCheck = await db("SELECT * FROM CART_LIST WHERE CART_UID = ?", [CART_UID])

      if(cartCheck.length <= 1) {
        await db("DELETE FROM CART WHERE CART_UID = ? AND USER_ID = ?", [CART_UID, userId])
      }
      else {
        await db("DELETE FROM CART_LIST WHERE CART_UID = ? AND BOOK_UID = ?", [CART_UID, BOOK_UID])
      }
      
      
      next()

    } catch (error) {
      console.log(error)
    }
  }

  // 장바구니 주문
  async orderBasket(req, res, next) {
    try {

      if (req.session.USER_ID == null) {
        res.send(
          `<script type="text/javascript">
          alert("로그인을 하세요"); 
          location.href='/users/login';
          </script>`
        );
      }

      const userId = req.session.USER_ID
      const CART_UID = req.params["uid"]

      let myAddr = await db("SELECT * FROM ADDR_INFO WHERE USER_ID = ?", [userId]);
      let myCard = await db("SELECT * FROM CARD WHERE USER_ID = ?", [userId]);

      let orderBook = await db("SELECT c.CART_UID, c.CART_COUNT, b.BOOK_UID, b.BOOK_PATH, b.BOOK_NAME, b.BOOK_PUBLISH, b.BOOK_AUTHOR, b.BOOK_DETAIL, b.BOOK_PRICE, b.BOOK_COUNT FROM CART_LIST c, BOOK b WHERE CART_UID = ? AND b.BOOK_UID = c.BOOK_UID", [CART_UID])
      var count = []

      for(var i = 0; i < orderBook.length; i++) {
        count[i] = orderBook[i].CART_COUNT
        
        if(count[i] > orderBook[i].BOOK_COUNT) {
          res.send(
            `<script type="text/javascript">
            alert("` + orderBook[i].BOOK_NAME + `의 수량이 장바구니에 담긴 수량보다 적습니다."); 
            location.href='/basket/basketList';
            </script>`
          );
        }
      }
      
      req.body.myAddr = myAddr
      req.body.myCard = myCard
      req.session.orderBook = orderBook
      req.session.count = count

      next()

    } catch (error) {
      console.log(error)

    }
  }

}

module.exports = basketController;