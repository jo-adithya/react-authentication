import express from 'express';

const router = express.Router();

/**
 * @route   GET /api/test
 * @desc    Testing route
 * @access  Public
 */
router.get('/', (req, res) => {
  res.status(200).send('It works!');
});

export default router;
