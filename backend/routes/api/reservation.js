const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Reservation } = require('../../db/models');

//get /api/reservation
//http://localhost:5000/api/reservation GET WORKS!
router.get('/', asyncHandler(async (req, res) => {
    const reservation = await Reservation.findAll();
    res.json(reservation);
  }),
  );

//post /api/reservation
//http://localhost:5000/api/reservation POST works!
router.post('/', asyncHandler(async (req, res) => {
    const {
        reserverId,
        bathroomId,
        reservationDate
    } = req.body;

    const reservation = await Reservation.create({ reserverId, bathroomId, reservationDate });
    // if(Reservation) res.json("Reservation created!")
    res.json(reservation)
  }),
  );


// http:localhost:5000/api/reervation/id GET by id works
// router.get('/:id', asyncHandler(async(req, res)=> {
//     const reservationId = req.params.id;
//     const reservation = await Reservation.findByPk(reservationId)
//     return res.json(reservation)
// }))


// http://localhost:5000/api/reservation  GET doesn't work
router.get('/:id', asyncHandler(async(req, res) => {
    const  id  = req.params.id  //
    const reservations = await Reservation.findAll({
        where: {
            reserverId: id,
        }
    })
    return res.json(reservations)
}))

//http://localhost:5000/api/reservation/id DELETE works!
  router.delete('/:id', asyncHandler(async (req, res) => {
    const reserverId = req.params.id
    const reservation = await Reservation.findByPk(reserverId);
    reservation.destroy();
    // if(!Reservation){
    //     res.json("Reservation is deleted!")
    // }
    res.json(reservation)
  }),
  );



module.exports = router;
