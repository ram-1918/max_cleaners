from datetime import datetime
import uuid

status_code_mapper = {
    200: "HTTP_200_OK",
    201: "HTTP_201_CREATED",
    400: "HTTP_400_BAD_REQUEST",
    401: "HTTP_401_UNAUTHORIZED"
}

def calc_time_left(epoch):
    return datetime.fromtimestamp(epoch) - datetime.now()


def decode_uuid(id):
    return uuid.UUID(id).hex  # converts string to UUID

