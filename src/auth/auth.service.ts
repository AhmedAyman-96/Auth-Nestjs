import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    this.logger.log('Signup request received');
    const { email, name, password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      email,
      name,
      password: hashedPassword,
    });

    const token = this.jwtService.sign(
      { id: user._id },
      { algorithm: 'HS256' },
    );

    this.logger.log(`User ${email} signed up successfully`);
    return { token };
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    this.logger.log('Login request received');
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      this.logger.error(`Login failed: User ${email} not found`);
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      this.logger.error(`Login failed: Invalid password for user ${email}`);
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ id: user._id });

    this.logger.log(`User ${email} logged in successfully`);
    return { token };
  }
}
