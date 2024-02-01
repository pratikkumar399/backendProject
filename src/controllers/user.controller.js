import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";


const registerUser = asyncHandler(async (req, res) => {
    // get details from frontend
    // check validation -> not empty
    // check if user already exists : username,email
    // check for images, check for avatar
    // upload images to cloudinary
    // create user object -> create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return response

    const { fullName, email, username, password } = req.body;
    console.log(email);

    if ([fullName, email, username, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }
    User.findOne({
        $or: [{ email }, { username }]
    }).then((user) => {
        if (user) {
            throw new ApiError(409, "User already exists");
        }
    });

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar is required");
    }
})

export { registerUser };